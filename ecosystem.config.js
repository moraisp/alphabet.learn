module.exports = {
  apps : [{
    name: "alphabet-learn",
    script: "npm run start:api",
    env: {
      NODE_ENV: "production",
    }
  }]
};
