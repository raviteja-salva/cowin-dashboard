import './index.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccinationByCoverageData} = props

  const dataFormatter = num => {
    if (num > 1000) {
      return `${(num / 1000).toString()}k`
    }
    return num.toString()
  }

  return (
    <ResponsiveContainer>
      <div className="card-container">
        <h1 className="top-heading">Vaccination Coverage</h1>
        <BarChart
          data={vaccinationByCoverageData}
          margin={{
            top: 5,
          }}
          width={1000}
          height={300}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="20%" />
        </BarChart>
      </div>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
