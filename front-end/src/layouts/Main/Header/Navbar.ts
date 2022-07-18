interface navConfigTypes {
  isAuthenticated: boolean;
  logout: () => void;
}

const navConfig: navConfigTypes = {
  isAuthenticated: false,
  logout: () => {
    console.log("logout");
  },
};

export default navConfig;
