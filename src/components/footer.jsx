import React from 'react'
import { $t } from '../helpers/locale-helper'

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center py-4">
        {$t('copyright')}
    </footer>
  )
}

export default Footer