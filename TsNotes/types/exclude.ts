type roles = "Admin" |"user"| "guest"

type Authorized = Exclude<roles,"guest">

