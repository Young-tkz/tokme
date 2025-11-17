
import React from 'react';

const RobotsTxtPage: React.FC = () => {
  const content = `User-agent: *
Allow: /

Sitemap: https://tokme.example.com/sitemap.xml
`;

  return (
    <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
      {content}
    </pre>
  );
};

export default RobotsTxtPage;
