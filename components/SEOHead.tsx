import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'product' | 'article';
    productData?: {
        price: number;
        currency: string;
        availability: 'in stock' | 'out of stock' | 'preorder';
        brand: string;
        sku: string;
    };
}

const SEOHead: React.FC<SEOProps> = ({
    title = "Marmuddy's Bespoke Fashion | Luxury African Menswear | Nigeria's Premier Tailor",
    description = "Experience world-class bespoke tailoring in Asaba, Nigeria. Marmuddy's crafts luxury African menswear combining Nigerian heritage with international sophistication. Custom suits, senators, and premium fabrics.",
    image = "https://i.postimg.cc/hvXGwwXZ/8JA_DELTA_LONG_SLEEVE_WOODEN_MANEQUIN.jpg",
    url = "https://marmuddy.com",
    type = 'website',
    productData
}) => {
    const siteName = "Marmuddy's Bespoke Fashion";
    const twitterHandle = "@MarmmuddysFashion";

    // Structured Data for Organization
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "ClothingStore",
        "name": siteName,
        "description": "Nigeria's premier bespoke fashion house specializing in luxury African menswear",
        "url": url,
        "logo": "https://i.postimg.cc/hvXGwwXZ/8JA_DELTA_LONG_SLEEVE_WOODEN_MANEQUIN.jpg",
        "image": image,
        "telephone": "+2348066179268",
        "priceRange": "₦₦₦₦",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Flat 2 Obakpo Street, off Midwifery Road",
            "addressLocality": "Asaba",
            "addressRegion": "Delta State",
            "addressCountry": "NG"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "6.1948",
            "longitude": "6.7035"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://instagram.com/marmuddy",
            "https://facebook.com/marmuddy",
            "https://wa.me/2348066179268"
        ]
    };

    // Product Schema (if product page)
    const productSchema = productData ? {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": title,
        "description": description,
        "image": image,
        "brand": {
            "@type": "Brand",
            "name": productData.brand
        },
        "sku": productData.sku,
        "offers": {
            "@type": "Offer",
            "url": url,
            "priceCurrency": productData.currency,
            "price": productData.price,
            "availability": `https://schema.org/${productData.availability === 'in stock' ? 'InStock' : 'OutOfStock'}`,
            "seller": {
                "@type": "Organization",
                "name": siteName
            }
        }
    } : null;

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": url
            }
        ]
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_NG" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <meta property="twitter:site" content={twitterHandle} />
            <meta property="twitter:creator" content={twitterHandle} />

            {/* Additional Meta Tags */}
            <meta name="keywords" content="bespoke tailoring Nigeria, luxury African menswear, custom suits Asaba, Nigerian fashion, senator suits, cashmere suits Nigeria, African royalty fashion, premium tailoring Delta State" />
            <meta name="author" content={siteName} />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Geo Tags */}
            <meta name="geo.region" content="NG-DE" />
            <meta name="geo.placename" content="Asaba" />
            <meta name="geo.position" content="6.1948;6.7035" />
            <meta name="ICBM" content="6.1948, 6.7035" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            {productSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(productSchema)}
                </script>
            )}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    );
};

export default SEOHead;
