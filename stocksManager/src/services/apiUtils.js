import alerts from '../components/alerts';

const apiUtils = { 
    handleError: (error) => {
        alerts.single("Our Systems are unavailable", "Please try again later", () => console.log(error))
    }
  };

export { apiUtils as default };