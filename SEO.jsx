import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>Aim Sportswear</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

export default SEO;
