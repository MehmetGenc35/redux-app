import React from 'react'
import { $t } from '../helpers/locale-helper'

const HomePage = () => {
  return (
    <div>
      <h3>{$t('home-page')}</h3>
      <h5>{$t('welcome')}</h5>
      
    </div>
  )
}

export default HomePage