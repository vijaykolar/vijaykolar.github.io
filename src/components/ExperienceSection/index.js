import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import GLobussoft from '../../assets/images/experience/GLobussoft.png'
import lollypop from '../../assets/images/experience/lollypop.png'
import iv from '../../assets/images/experience/iv.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={iv}
            colour='#ff4f00'
            title='Indivirtual Dubai'
            link='https://www.indivirtualdubai.com/'
            timeperiod='2018'
            subtitle='Working as a UI developer on current technologies like React'
          />
          <ExperienceUnit
            logo={lollypop}
            colour='#FFFFFF'
            title='Lollypop'
            link='https://lollypop.biz'
            timeperiod='2016'
            subtitle='Worked as UI developer. Built websites using Pug, Scss, JS, and Gulp.'
          />
          <ExperienceUnit
            logo={GLobussoft}
            colour='#ffffff'
            title='Globussoft'
            link='https://globussoft.com'
            timeperiod='2016'
            subtitle='Worked as UI design cum developer. Designed Android and iOS apps using photoshop.'
          />
          
          
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
