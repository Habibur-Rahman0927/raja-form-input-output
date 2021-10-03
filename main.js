const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element;
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

const jobTitle = getElement('#jobTitle');
const desc = getElement('#desc');
const nameOfSite = getElement('#nameOfSite');
const publishing = getElement('#publishing');
const validation = getElement('#validation');
const jobType = getElement('#jobType');
const nameCompany = getElement('#nameCompany');
const companyWeb = getElement('#companyWeb');
const companyLogo = getElement('#companyLogo');
const streetAddress = getElement('#streetAddress');
const localAddress = getElement('#localAddress');
const stateDivision = getElement('#stateDivision');
const postalCode = getElement('#postalCode');
const country = getElement('#country');
const minimun = getElement('#minimun');
const maximum = getElement('#maximum');
const btn = getElement('#sub');
const output = getElement('#output');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const jobTitleValue = jobTitle.value;
  const descValue = desc.value;
  const nameOfSiteValue = nameOfSite.value;
  const publishingValue = publishing.value;
  const validationValue = validation.value;
  const jobTypeValue = jobType.value;
  const nameCompanyValue = nameCompany.value;
  const companyWebValue = companyWeb.value;
  const companyLogoValue = companyLogo.value;
  const streetAddressValue = streetAddress.value;
  const localAddressValue = localAddress.value;
  const stateDivisionValue = stateDivision.value;
  const postalCodeValue = postalCode.value;
  const countryValue = country.value;
  const minimunValue = minimun.value;
  const maximumValue = maximum.value;

  output.innerText = `
<script type="application/ld+json">
{
"@context" : "https://schema.org/",
      "@type" : "JobPosting",
      "title" : "${jobTitleValue}",
      "description" : "<p>${descValue}</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "${nameOfSiteValue}",
        "value": "1234567"
      },
      "datePosted" : "${publishingValue}",
      "validThrough" : "${validationValue}",
      "employmentType" : "${jobTypeValue}",
      "hiringOrganization" : {
        "@type" : "Organization",
        "name" : "${nameCompanyValue}",
        "sameAs" : "${companyWebValue}",
        "logo" : "${companyLogoValue}"
      },
      "jobLocation": {
      "@type" : "Place",
        "address" : {
        "@type" : "PostalAddress",
        "streetAddress": "${streetAddressValue}",
        "addressLocality": "${localAddressValue}",
        "addressRegion": "${stateDivisionValue}",
        "postalCode": "${postalCodeValue}",
        "addressCountry": "${countryValue}"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "BDT",
        "value": {
          "@type": "QuantitativeValue",
          "minvalue": ${Number(minimunValue)},
          "maxvalue": ${Number(maximumValue)},
          "unitText": "MONTH"
        }
      }
    }
    </script>
`


  console.log(`
<script type="application/ld+json">
{
"@context" : "https://schema.org/",
      "@type" : "JobPosting",
      "title" : "${jobTitleValue}",
      "description" : "<p>${descValue}</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "${nameOfSiteValue}",
        "value": "1234567"
      },
      "datePosted" : "${publishingValue}",
      "validThrough" : "${validationValue}",
      "employmentType" : "${jobTypeValue}",
      "hiringOrganization" : {
        "@type" : "Organization",
        "name" : "${nameCompanyValue}",
        "sameAs" : "${companyWebValue}",
        "logo" : "${companyLogoValue}"
      },
      "jobLocation": {
      "@type" : "Place",
        "address" : {
        "@type" : "PostalAddress",
        "streetAddress": "${streetAddressValue}",
        "addressLocality": "${localAddressValue}",
        "addressRegion": "${stateDivisionValue}",
        "postalCode": "${postalCodeValue}",
        "addressCountry": "${countryValue}"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "BDT",
        "value": {
          "@type": "QuantitativeValue",
          "minvalue": ${Number(minimunValue)},
          "maxvalue": ${Number(maximumValue)},
          "unitText": "MONTH"
        }
      }
    }
    </script>
`)

  jobTitle.value = '';

  desc.value = '';

  nameOfSite.value = '';

  publishing.value = '';

  validation.value = '';

  jobType.value = '';

  nameCompany.value = '';

  companyWeb.value = '';

  companyLogo.value = '';

  streetAddress.value = '';

  localAddress.value = '';

  stateDivision.value = '';

  postalCode.value = '';

  country.value = '';

  minimun.value = '';

  maximum.value = '';



})
