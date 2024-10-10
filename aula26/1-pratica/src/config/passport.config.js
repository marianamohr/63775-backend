const passport = require("passport");
const local = require("passport-local");
const userModel = require("../model/user.model");
const { createHash, isValidatePassword } = require("../utils/index");
const jwt = require("passport-jwt");
const { generateToken } = require("../utils/jwt.utils");
const userService = require("../service/user.service");
const config =require('./config')

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    return (token = req.cookies["accessToken"]);
  }
};

const initializePassport = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: config.secret, 
      },
      async (jwt_payload, done) => {
        console.log("AAAAAAA", jwt_payload);
        try {
          return done(null, jwt_payload);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    "login",
    new local.Strategy(
      { usernameField: "username" },
      async (username, password, done) => {
        try {
          console.log("to no login");
          const userFound = await userService.getUsersByEmail(username);
          if (!userFound) {
            console.log("user not found");
            return done(null, false);
          }
          console.log("user found", userFound);
          const isPasswordValidTest = await isValidatePassword(
            password,
            userFound
          );
          console.log(isPasswordValidTest);
          if (isPasswordValidTest) {
            console.log("password valid");
            let user = [userFound];
            console.log("user", user);
            user = user.map((u) => u.toJSON());
            console.log("user", user);
            delete user[0].password;
            const accessToken = generateToken(user[0]);
            user[0].token = accessToken;
            console.log("userFinal", user);
            return done(null, user[0]);
          } else {
            return done(null, false);
          }
        } catch (error) {
          return done(`Erro ao obter user ${error}`);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
      done(`Erro ao obter user ${error}`);
    }
  });
};

module.exports = initializePassport;
