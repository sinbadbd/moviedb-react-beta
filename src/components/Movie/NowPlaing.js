import React from 'react'
import Gride from '../Grid'
import Filter from '../Sidebar/Filter/Filter'

const NowPlaing = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Filter/>
                <dict className="col-lg-8">
                    <Gride />
                </dict>
            </div>
        </div>
    )
}

export default NowPlaing
