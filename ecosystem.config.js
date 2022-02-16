module.exports = {
  apps: [{
    name: 'best Sleep',
    script: './bin/www',
    instances: 1,
    watch: true,
    autorestart: false,
    env: {
      Server_PORT:4000
    }
  }],
};
