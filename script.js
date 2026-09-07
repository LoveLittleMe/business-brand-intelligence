(function(){

  'use strict';

  const industries = {

    beauty: "Beauty & Wellness",

    home: "Home Services",

    professional: "Professional Services",

    food: "Restaurants & Food",

    nonprofit: "Nonprofits",

    online: "Online Businesses",

    retail: "Retail & Local Shops",

    creator: "Creators & Personal Brands",

    other: "Other"

  };


  const problems = {

    sales: {

      title: "Getting traffic but no sales",

      intro:
        "Traffic, inquiries, or engagement may be reaching the business without producing the result you expected.",

      possibilities:
        "Traffic quality, offer clarity, trust, pricing, follow-up, and purchase friction are different possibilities.",

      evidence:
        "Review where people enter, what they do next, where they stop, and what customers or non-buyers say."

    },


    leads: {

      title: "Leads aren't converting",

      intro:
        "People show interest, but too few become paying customers or clients.",

      possibilities:
        "Lead quality, response time, qualification, the offer, sales conversations, or another stage may be involved.",

      evidence:
        "Examine lead sources, response and follow-up records, conversion stages, and direct feedback."

    },


    revenue: {

      title: "Revenue is inconsistent",

      intro:
        "Some periods are strong while others are difficult to predict.",

      possibilities:
        "Demand, customer concentration, seasonality, capacity, pricing, retention, and cash-flow timing may each play a role.",

      evidence:
        "Compare revenue patterns with customer sources, sales activity, capacity, and available financial records."

    },


    marketing: {

      title: "Marketing isn't working",

      intro:
        "You are investing time or money in promotion without knowing what it is contributing.",

      possibilities:
        "The issue may be measurement, audience fit, messaging, conversion, or the offer—not necessarily the amount spent.",

      evidence:
        "Review campaign objectives, costs, traffic or inquiry quality, conversion evidence, and what can be attributed to marketing."

    },


    owner: {

      title: "Everything depends on me",

      intro:
        "Too many decisions, tasks, or customer interactions require your personal involvement.",

      possibilities:
        "Some owner involvement is valuable. Other dependencies may reflect unclear processes, missing ownership, capacity limits, or unnecessary work.",

      evidence:
        "Map recurring work, decision points, handoffs, and the consequences when the owner is unavailable."

    },


    operations: {

      title: "Operations feel overwhelmed",

      intro:
        "Work is taking more time, effort, or coordination than it should.",

      possibilities:
        "Repeated tasks, unclear responsibilities, process variation, capacity constraints, and unsuitable tools are possible contributors.",

      evidence:
        "Observe the workflow, identify repeated delays or rework, and establish which activities consume the most resources."

    },


    decisions: {

      title: "Not sure if I should hire or automate",

      intro:
        "You know the business needs improvement, but you are unsure which investment makes sense.",

      possibilities:
        "Hiring, software, automation, simplification, and process changes solve different problems. More complexity is not always better.",

      evidence:
        "Define the required change, examine the current process and capacity, and compare appropriate alternatives before committing."

    },


    retention: {

      title: "Customers aren't returning",

      intro:
        "You are acquiring customers, but repeat business or continued engagement is weaker than expected.",

      possibilities:
        "Customer fit, experience, product or service quality, purchase frequency, follow-up, and changing needs may all matter.",

      evidence:
        "Review repeat-purchase patterns, customer feedback, service experience, and whether repeat business is expected for your model."

    },


    unknown: {

      title: "Not sure where to start",

      intro:
        "You can see that the business is not performing as you hoped, but the source is unclear.",

      possibilities:
        "Several parts of a business can produce similar symptoms. Choosing a solution before understanding the condition can create unnecessary cost.",

      evidence:
        "Start with a broad evidence review, clarify the most important concerns, and investigate the areas that warrant deeper attention."

    }

  };


  let selectedIndustry = null;

  let selectedProblem = null;


  const explainer =
    document.getElementById('explainer');


  function track(name, params){

    if(typeof window.gtag === 'function'){

      window.gtag(
        'event',
        name,
        params || {}
      );

    }

  }


  document
    .querySelectorAll('[data-industry]')
    .forEach(btn => {

      btn.addEventListener(
        'click',
        () => {

          document
            .querySelectorAll('[data-industry]')
            .forEach(b => {

              b.classList.remove('selected');

            });


          btn.classList.add('selected');


          selectedIndustry =
            btn.dataset.industry;


          const intro =
            document.getElementById('problem-intro');


          intro.textContent =
            'For ' +
            industries[selectedIndustry] +
            ': select the issue that sounds most familiar.';


          track(
            'guide_industry_select',
            {
              business_type:selectedIndustry
            }
          );


          document
            .getElementById('challenges')
            .scrollIntoView({
              behavior:'smooth',
              block:'start'
            });

        }
      );

    });


  document
    .getElementById('skip-industry')
    .addEventListener(
      'click',
      () => {

        selectedIndustry = null;


        document
          .getElementById('problem-intro')
          .textContent =
            'Select the issue that sounds most familiar.';


        track(
          'guide_industry_skip',
          {}
        );


        document
          .getElementById('challenges')
          .scrollIntoView({
            behavior:'smooth',
            block:'start'
          });

      }
    );


  document
    .querySelectorAll('[data-problem]')
    .forEach(btn => {

      btn.addEventListener(
        'click',
        () => {

          document
            .querySelectorAll('[data-problem]')
            .forEach(b => {

              b.classList.remove('selected');

            });


          btn.classList.add('selected');


          selectedProblem =
            btn.dataset.problem;


          const p =
            problems[selectedProblem];


          document
            .getElementById('explainer-context')
            .textContent =
              selectedIndustry
                ? industries[selectedIndustry]
                : 'Your business';


          document
            .getElementById('explainer-title')
            .textContent =
              p.title;


          document
            .getElementById('explainer-intro')
            .textContent =
              p.intro;


          document
            .getElementById('explainer-possibilities')
            .textContent =
              p.possibilities;


          document
            .getElementById('explainer-evidence')
            .textContent =
              p.evidence;


          explainer.classList.add('visible');


          track(
            'guide_problem_select',
            {

              business_type:
                selectedIndustry ||
                'not_selected',

              problem_type:
                selectedProblem

            }
          );


          track(
            'guide_result_view',
            {

              business_type:
                selectedIndustry ||
                'not_selected',

              problem_type:
                selectedProblem

            }
          );


          explainer.scrollIntoView({
            behavior:'smooth',
            block:'nearest'
          });

        }
      );

    });


  document
    .getElementById('guide-checkout')
    .addEventListener(
      'click',
      () => {

        track(
          'diagnostic_checkout_click',
          {

            link_location:
              'guided_explainer',

            business_type:
              selectedIndustry ||
              'not_selected',

            problem_type:
              selectedProblem ||
              'not_selected'

          }
        );

      }
    );


  document
    .getElementById('guide-fit')
    .addEventListener(
      'click',
      () => {

        track(
          'fit_call_click',
          {

            link_location:
              'guided_explainer',

            business_type:
              selectedIndustry ||
              'not_selected',

            problem_type:
              selectedProblem ||
              'not_selected'

          }
        );

      }
    );


})();
