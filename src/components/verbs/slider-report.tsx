const SliderReport = ( { reportTitle, questionSet } ) => {
    console.log(questionSet);
    return (
        <div id="report">
            <section className="col-lg-5">
                <h1>{ reportTitle }</h1>
                <table className="col-lg-10">
                { questionSet.map( (question, index) =>
                    <>
                        <thead>
                            <tr className='col-xs-12'>
                                <th colSpan={3} className='col-xs-12'>{ question.infinitive }</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='col-xs-12'>
                                <th className='col-xs-4'>pronoun</th>
                                <th className='col-xs-4'>correct answer</th>
                                <th className='col-xs-4'>user answer</th>
                            </tr>
                            <tr>
                                <td>Yo</td>
                                <td>{ question.answers[0] }</td>
                                <td>{ question.slideSet[0].split('\n')[0] }</td>
                            </tr>
                            <tr>
                                <td>Tu</td>
                                <td>{ question.answers[1] }</td>
                                <td>{ question.slideSet[0].split('\n')[1] }</td>
                            </tr>
                            <tr>
                                <td>El</td>
                                <td>{ question.answers[2] }</td>
                                <td>{ question.slideSet[0].split('\n')[2] }</td>
                            </tr>
                            <tr>
                                <td>Nosotros</td>
                                <td>{ question.answers[3] }</td>
                                <td>{ question.slideSet[0].split('\n')[3] }</td>
                            </tr>
                            <tr>
                                <td>Vosotros</td>
                                <td>{ question.answers[4] }</td>
                                <td>{ question.slideSet[0].split('\n')[4] }</td>
                            </tr>
                            <tr>
                                <td>Ellos</td>
                                <td>{ question.answers[5] }</td>
                                <td>{ question.slideSet[0].split('\n')[5] }</td>
                            </tr>
                        </tbody>
                    </>
                    )}
                </table>
            </section>
        </div>
    )
};

export default SliderReport;