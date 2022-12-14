exports.VerifyAccessToken = (token) => {
  if(token == "Bearer 12345"){
    return true
  }
  return false
}