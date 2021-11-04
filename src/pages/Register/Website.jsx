import React, { useState }  from 'react'
import {Form, Input, AutoComplete} from 'antd';

function Website() {
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
      if (!value) {
        setAutoCompleteResult([]);
      } else {
        setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
      }
    };
  
    const websiteOptions = autoCompleteResult.map((website) => ({
      label: website,
      value: website,
    }));

    return (
        <>
            <Form.Item
            name="website"
            label="홈페이지 주소"
            rules={[
                {
                required: true,
                message: '홈페이지 주소를 입력해주세요!',
                },
            ]}
            >
            <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
                <Input />
            </AutoComplete>
            </Form.Item>
        </>
    )
}

export default Website
