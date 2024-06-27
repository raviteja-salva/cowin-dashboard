import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

class CowinDashboard extends Component {
  state = {
    isLoading: true,
    vaccinationByCoverageData: [],
    vaccinationByAgeData: [],
    vaccinationByGenderData: [],
    isFailed: false,
  }

  componentDidMount() {
    this.getVaccinationDetails()
  }

  getVaccinationDetails = async () => {
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(vaccinationDataApiUrl)

    if (response.ok) {
      const responseData = await response.json()

      this.setState({
        vaccinationByCoverageData: responseData.last_7_days_vaccination,
        vaccinationByAgeData: responseData.vaccination_by_age,
        vaccinationByGenderData: responseData.vaccination_by_gender,
        isLoading: false,
      })
    } else {
      this.setState({isFailed: true, isLoading: false})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" height={80} width={80} color="#ffffff" />
    </div>
  )

  failureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="top-heading">Something went wrong</h1>
    </div>
  )

  renderData = () => {
    const {
      vaccinationByCoverageData,
      vaccinationByAgeData,
      vaccinationByGenderData,
    } = this.state

    return (
      <>
        <VaccinationCoverage
          vaccinationByCoverageData={vaccinationByCoverageData}
        />
        <VaccinationByGender
          vaccinationByGenderData={vaccinationByGenderData}
        />
        <VaccinationByAge vaccinationByAgeData={vaccinationByAgeData} />
      </>
    )
  }

  renderContent = () => {
    const {isLoading, isFailed} = this.state
    let content
    if (isLoading) {
      content = this.renderLoader()
    } else if (isFailed) {
      content = this.failureView()
    } else {
      content = this.renderData()
    }
    return content
  }

  render() {
    return (
      <div className="container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="logo-heading">Co-Win</h1>
        </div>
        <h1 className="top-heading">CoWin Vaccination in India</h1>
        {this.renderContent()}
      </div>
    )
  }
}

export default CowinDashboard
