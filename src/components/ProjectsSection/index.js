import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import batchly from '../../assets/images/projects/batchly.png'
import bonito from '../../assets/images/projects/bonito.jpg'
import mobike from '../../assets/images/projects/mobike.svg'
import draup from '../../assets/images/projects/draup.png'
import psgroup from '../../assets/images/projects/psgroup.jpeg'
import rd from '../../assets/images/projects/rd.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={rd}
            colour="#fff"
            title="run adam"
            link="https://runadam.com/"
            timeperiod="2018"
            subtitle="India's first sports platform that will connect you to various stakeholders in the sports."
          />
          <ExperienceUnit
            logo={psgroup}
            colour="#fff"
            title="ps group"
            link="https://psgroup.in/"
            timeperiod="2017"
            subtitle="DRAUP platform brings together Machine Intelligence, Human Curation."
          />
          <ExperienceUnit
            logo={draup}
            colour="#fff"
            title="Draup"
            link="draup.com/"
            timeperiod="2017"
            subtitle="DRAUP platform brings together Machine Intelligence, Human Curation."
          />
          <ExperienceUnit
            logo={mobike}
            colour="#fff"
            title="Mobike bazar"
            link="https://www.mobikebazar.com/"
            timeperiod="2017"
            subtitle="Bike Spare Parts For Bajaj, Tvs, Honda, Hero, Suzuki, Yamaha, Royal Enfiled."
          />
          <ExperienceUnit
            logo={bonito}
            colour="#fff"
            title="bonito designs"
            link="http://www.bonito.in/"
            timeperiod="2016"
            subtitle="one of the best interior designers in Bangalore; They design creative interiors."
          />
          <ExperienceUnit
            logo={batchly}
            colour="#FFFFFF"
            title="Compute.io"
            link="https://www.cisco.com/c/en/us/about/corporate-strategy-office/acquisitions/cmpute.htm"
            timeperiod="2016"
            subtitle="Batchly helps enterprises achieve data processing nirvana. It is a cloud scale data processing service."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
