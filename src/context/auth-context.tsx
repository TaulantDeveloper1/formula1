import React from "react";

export interface AuthContextInterface {
  user: boolean;
}

const user: AuthContextInterface = {
  user: false,
};

// export const authContextDefaults: AuthContextInterface = {

// };

export const AuthContext = React.createContext<AuthContextInterface>(user);
