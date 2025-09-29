function Error({ statusCode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24 }}>
      <div style={{ maxWidth: 640 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
          {statusCode ? `An error ${statusCode} occurred` : 'An error occurred'}
        </h1>
        <p>Please go back and try again, or return to the homepage.</p>
        <a href="/" style={{ color: '#2563eb', textDecoration: 'underline', marginTop: 12, display: 'inline-block' }}>Go home</a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;


