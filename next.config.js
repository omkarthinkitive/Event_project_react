const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports =(phase)=>{
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return{
      env:{
        mongodb_username:'omkar',
        mongodb_password:'JJZk6ByLgyKtW1l5',
        mongodb_clustername:'cluster0',
        mongodb_database:'events-dev',
      }
    }

  }

  return{
  env:{
    mongodb_username:'omkar',
    mongodb_password:'JJZk6ByLgyKtW1l5',
    mongodb_clustername:'cluster0',
    mongodb_database:'events',
  }
} 
}
