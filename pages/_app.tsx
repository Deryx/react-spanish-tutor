import Layout from '../src/components/layout';
import 'bootstrap/dist/css/bootstrap.css';
import '/styles/styles.scss';
import '../styles/index.scss';
import '/styles/common/siteHeader.scss';
import '/styles/vocabulary/input.scss';
import '/styles/vocabulary/completion.scss';
import '/styles/vocabulary/flashcard.scss';
import '/styles/vocabulary/quiz.scss';
import '/styles/vocabulary/fillin.scss';
import '/styles/vocabulary/scramble.scss';
import '/styles/vocabulary/slider.scss';
import '/styles/verbs/tenses.scss';
import '/styles/verbs/input.scss';
import '/styles/verbs/conjugator.scss';
import '/styles/verbs/flashcard.scss';
import '/styles/verbs/slider.scss';
import '/styles/verbs/conjugator-report.scss';
import '/styles/common/accents.scss';
import '/styles/common/card.scss';
import '/styles/common/modal.scss';
import '/styles/vocabulary/simple-report.scss';
import '/styles/common/contentCard.scss';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
