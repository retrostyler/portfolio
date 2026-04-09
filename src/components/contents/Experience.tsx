import React from 'react';
import { TimeLine, TimeLineItem } from '../utils/ExpTimeLine';

const Experience = () => {
    return (
        <TimeLine>
            
            <TimeLineItem active>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-foreground hover:underline hover:underline-offset-2 text-emerald-600">
                       Product Engineer at ThriftX 
                    </span>
                    {" "}•{" "}
                    <span className="text-muted-foreground">
                        Dec 2024 - Present
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    • Architected and developed a full-stack multi-vendor e-commerce marketplace from the ground up using Next.js and Firebase.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Designed the core product workflows, including vendor onboarding, inventory management, and a dynamic coupon/pricing engine.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Engineered custom Admin and Vendor dashboards to streamline order tracking, utilizing Google Sign-In and Mobile OTP for secure access.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Integrated third-party logistics (FShip/Shiprocket) directly into the checkout flow for automated AWB generation and order fulfillment.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Managed a team of engineering interns by establishing GitHub branching strategies, PR workflows, and code review standards.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Optimized frontend performance and user experience by implementing WebP image compression pipelines and configuring secure Firebase IAM staging environments.
                </TimeLineItem.Description>
            </TimeLineItem>

            <TimeLineItem>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-foreground hover:underline hover:underline-offset-2 text-emerald-600">
                       Research Intern at IIT Delhi — FE2B Lab 
                    </span>
                    {" "}•{" "}
                    <span className="text-muted-foreground">
                        May 2025 - Jul 2025
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    • Designed experimental setups for energy extraction from autorotating plates.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Post-processed PIV data to extract and analyze velocity and vorticity fields.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Fabricated physical prototypes with integrated sensors for controlled testing.
                </TimeLineItem.Description>
            </TimeLineItem>
            <TimeLineItem>
                
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-foreground hover:underline hover:underline-offset-2 text-emerald-600">
                       Digital Marketing Intern at Blink Digital
                    </span>
                    {" "}•{" "}
                    <span className="text-muted-foreground">
                        Mar 2025 - Jun 2025
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    • Launched and optimised Meta & Google campaigns for e-commerce clients.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Ran iterative creative A/B tests, reallocating budget away from underperforming ads.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Built weekly performance dashboards tracking CTR, CPC, CAC, and ROAS.
                </TimeLineItem.Description>
            </TimeLineItem>

            

            <TimeLineItem>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-foreground hover:underline hover:underline-offset-2 text-emerald-600">
                        Sales & Marketing Intern at Patrawale Foods
                    </span>
                    {" "}•{" "}
                    <span className="text-muted-foreground">
                        Dec 2024 - Feb 2025
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    • Conducted cold outreach to generate leads and onboard 35+ new customers.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Managed customer onboarding and post-purchase follow-up flows to increase repeat purchases.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Assisted in sales strategy development and maintained customer database for interaction tracking.
                </TimeLineItem.Description>
            </TimeLineItem>
            <TimeLineItem last>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-foreground hover:underline hover:underline-offset-2 text-emerald-600">
                       Research Intern at IIT Delhi — Quest Lab 
                    </span>
                    {" "}•{" "}
                    <span className="text-muted-foreground">
                        May 2024 - Jul 2024
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    • Built a real-time air quality monitoring device using ESP32, RTC, temperature/humidity sensors and SCD30 CO<sub>2</sub> module.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Calibrated low-cost sensors against reference instruments (Licor/Testo) for measurement accuracy.
                </TimeLineItem.Description>
                <TimeLineItem.Description>
                    • Analysed pollution patterns using Python and Jupyter; documented findings for research reproducibility.
                </TimeLineItem.Description>
            </TimeLineItem>
        </TimeLine>
    );
};

export default Experience;
