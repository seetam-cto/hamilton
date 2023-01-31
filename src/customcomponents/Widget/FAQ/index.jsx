import React from 'react'
import { Collapse } from 'antd'
const {Panel} = Collapse

const FAQ = () => {
  return (
    <section className="faq">
        <div className="container">
            <div className="faq-content">
                <h2>Frequently Asked Questions</h2>
                <Collapse defaultActiveKey={['1']} ghost>
                    <Panel header="Are Milton Products eco friendly?" key="1">
                    <p>You can contact us through our Contact page or head over to our FAQs page. We will be happy to assist you.</p>
                    </Panel>
                    <Panel header="Are Milton Products eco friendly?" key="2">
                    <p>You can contact us through our Contact page or head over to our FAQs page. We will be happy to assist you.</p>
                    </Panel>
                    <Panel header="Where can I buy Milton Products in India?" key="3">
                    <p>You can contact us through our Contact page or head over to our FAQs page. We will be happy to assist you.</p>
                    </Panel>
                    <Panel header="What makes Milton products different?" key="4">
                    <p>You can contact us through our Contact page or head over to our FAQs page. We will be happy to assist you.</p>
                    </Panel>
                    <Panel header="More questions?" key="5">
                    <p>You can contact us through our Contact page or head over to our FAQs page. We will be happy to assist you.</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    </section>
  )
}

export default FAQ