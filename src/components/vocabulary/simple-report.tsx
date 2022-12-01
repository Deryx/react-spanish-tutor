function SimpleReport( {reportTitle, questionSet, userAnswers} ) {
    const numQuestions = questionSet.length;
    let report = [];
    let set;
    for( let i = 0; i < numQuestions; i++ ) {
        set = {};
        set.question = questionSet[i].question;
        set.answer = questionSet[i].answer;
        set.userAnswer = userAnswers[i];
        report = [...report, set];
    }

    return (
        <div id="report">
            <section className="col-lg-4">
                <h1>{ reportTitle }</h1>
                <table className="col-lg-10">
                    <thead>
                        <tr>
                            <th className="col-lg-4">question</th>
                            <th className="col-lg-4">answer</th>
                            <th className="col-lg-4">user answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        { report.map( set => 
                            <tr>
                                <td>{ set.question }</td>
                                <td>{ set.answer }</td>
                                <td>{ set.userAnswer }</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default SimpleReport;