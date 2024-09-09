import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import '../css/index.scss'
import '../css/components/Layout.scss'
import '../css/pages/HomePage.scss'
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {

  return (
    <Layout>
      <section className='main-content'>
        <div className='flex'>
          <div className='bg-white padding-3'>
            <h2>FDA Online Label Repository</h2>
            <div className='flex flex-column flex-fill'>
              <Link className='padding-1' to='/proprietary_name/'>Proprietary Name Search</Link>
              <Link className='padding-1' to='/ndc_number/'>NDC Number Search</Link>
              <Link className='padding-1' to='/active_ingredient/'>Active Ingredient Search</Link>
              <Link className='padding-1' to='/application_number_or_monograph_id/'>Application Number or Monograph ID Search</Link>
              <Link className='padding-1' to='/company_name/'>Company Name Search</Link>
              <Link className='padding-1' to='/proprietary_name_and_company_name/'>Proprietary Name and Company Name Search</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>FDA Online Label Repository</title>
    </>
  )
}
