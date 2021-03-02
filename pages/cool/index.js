import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import * as d3 from 'd3'

const WIDTH = 1080
const HEIGHT = 720
const COOL_PAGE = 'Cool Page'
const EVEN_COOLER_PAGE = 'Even Cooler Page'

const CoolIndex = () => {
  const ref = useRef(null)
  const [isCoolPageHeader, setIsCoolPageHeader] = useState(true)

  useEffect(() => {
    const svg = d3.select(ref.current)
    const g = svg.select('g')

    const circles = g
      .append('circle')
      .attr('class', 'circle')
      .attr('r', 100)
      .attr('fill', '#E7C43A')
      .attr('transform', `translate(${WIDTH / 2}, ${HEIGHT / 2 - 250})`)
      .style('stroke-width', '5px')
      .style('stroke', 'black')
      .on('mouseover', function () {
        d3.select(this).style('opacity', '0.5').style('transition', '.3s')
      })
      .on('mouseout', function () {
        d3.select(this).style('opacity', '1').style('transition', '.3s')
      })
  }, [])

  const changeHeader = () => {
    setIsCoolPageHeader(!isCoolPageHeader)
  }

  /*** INITIALIZE svg elements here ***/
  return (
    <>
      {/* <Head>
        <title>COOLER PAGE</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head> */}
      <div className='App' style={{ padding: '1rem 2rem' }}>
        <h1>{isCoolPageHeader ? COOL_PAGE : EVEN_COOLER_PAGE}</h1>
        <svg width={WIDTH} height={HEIGHT} ref={ref}>
          <g transform={`translate(0,0)`} onClick={changeHeader} />
        </svg>
      </div>
    </>
  )
}

export default CoolIndex
