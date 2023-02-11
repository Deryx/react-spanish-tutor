const SliderReport = ( { reportTitle, questionSet } ) => {
    return (
        <div id="report">
            <section className="col-lg-5">
                <h1>{ reportTitle }</h1>
                <table className="col-lg-10">
                { questionSet.map( (question, index) =>
                    <>
                        <thead>
                            <tr className='col-xs-12'>
                                <th className='col-xs-4'>translation</th>
                                <th className='col-xs-4'>correct answer</th>
                                <th className='col-xs-4'>user answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ question.stationaryBricks[0] }</td>
                                <td>{ question.correctAnswers[0]}</td>
                                <td>{ question.slideBricks[0] }</td>
                            </tr>
                            <tr>
                                <td>{ question.stationaryBricks[1] }</td>
                                <td>{ question.correctAnswers[1]}</td>
                                <td>{ question.slideBricks[1] }</td>
                            </tr>
                            <tr>
                                <td>{ question.stationaryBricks[2] }</td>
                                <td>{ question.correctAnswers[2]}</td>
                                <td>{ question.slideBricks[2] }</td>
                            </tr>
                            <tr>
                                <td>{ question.stationaryBricks[3] }</td>
                                <td>{ question.correctAnswers[3]}</td>
                                <td>{ question.slideBricks[3] }</td>
                            </tr>
                            <tr>
                                <td>{ question.stationaryBricks[4] }</td>
                                <td>{ question.correctAnswers[4]}</td>
                                <td>{ question.slideBricks[4] }</td>
                            </tr>
                            <tr>
                                <td>{ question.stationaryBricks[5] }</td>
                                <td>{ question.correctAnswers[5]}</td>
                                <td>{ question.slideBricks[5] }</td>
                            </tr>
                        </tbody>
                    </>
                    )}
                </table>
            </section>
        </div>
    )
}

export default SliderReport;