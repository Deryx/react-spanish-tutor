const ConjugatorReport = ({ reportTitle, questionSet }) => {
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
                                <td>{ question.conjugations.yo }</td>
                                <td>{  question.userAnswers.yo }</td>
                            </tr>
                            <tr>
                                <td>Tu</td>
                                <td>{ question.conjugations.tu }</td>
                                <td>{ question.userAnswers.tu }</td>
                            </tr>
                            <tr>
                                <td>El</td>
                                <td>{ question.conjugations.el }</td>
                                <td>{ question.userAnswers.el }</td>
                            </tr>
                            <tr>
                                <td>Nosotros</td>
                                <td>{ question.conjugations.nosotros }</td>
                                <td>{ question.userAnswers.nosotros }</td>
                            </tr>
                            <tr>
                                <td>Vosotros</td>
                                <td>{ question.conjugations.vosotros }</td>
                                <td>{ question.userAnswers.vosotros }</td>
                            </tr>
                            <tr>
                                <td>Ellos</td>
                                <td>{ question.conjugations.ellos }</td>
                                <td>{ question.userAnswers.ellos }</td>
                            </tr>
                        </tbody>
                    </>
                    )}
                </table>
            </section>
        </div>
    )
}

export default ConjugatorReport;