// @onlyOwnGrammar - As this has jsx
class c {
 private renderForecastsTable() {
     let forecasts = this.props.forecasts.map(forecast => {
     return forecast.dateFormatted +
        forecast.temperatureC +
        forecast.temperatureF +
        forecast.summar;
    });
    return <table className="table">
    <thread>
    </thread>
    <tbody>
    {
      this.props.forecasts.map(forecast => {
     return forecast.dateFormatted +
        forecast.temperatureC +
        forecast.temperatureF +
        forecast.summar;
    }) 
    }
    </tbody>
    </table>;
 }

}