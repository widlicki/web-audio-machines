import type { NextPage } from 'next'
import React from 'react'
import AvailableMachines from '../components/site/AvailableMachines/AvailableMachines'
import Header from '../components/site/Header/Header'

const HomePage: NextPage = () => (
  <>
    <Header />
    <AvailableMachines />
  </>
)

export default HomePage
