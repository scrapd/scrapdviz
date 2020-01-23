<<<<<<< HEAD
const helmet = require('helmet');
const uuidv4 = require('uuid/v4');

// Configuration values mostly come from this talk:
// https://pyvideo.org/pybay-2019/browser-security-with-http-headers.html
// export default function csp(app) {
module.exports = function csp(app) {
=======
import helmet from 'helmet';
import uuidv4 from 'uuid/v4';

// Configuration values mostly come from this talk:
// https://pyvideo.org/pybay-2019/browser-security-with-http-headers.html
export default function csp(app) {
>>>>>>> Improves the security headers
  // Create a nonce on every request and make it available to other middleware
  app.use((req, res, next) => {
    res.locals.nonce = Buffer.from(uuidv4()).toString('base64');
    next();
  });

  const nonce = (req, res) => `'nonce-${res.locals.nonce}'`;

  const scriptSrc = [nonce, "'strict-dynamic'", "'unsafe-inline'", 'https:'];

  // In dev we allow 'unsafe-eval', so HMR doesn't trigger the CSP
  if (process.env.NODE_ENV !== 'production') {
    scriptSrc.push("'unsafe-eval'");
  }

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          baseUri: ["'none'"],
          objectSrc: ["'none'"],
          scriptSrc
        }
      },
      policy: ['strict-origin-when-cross-origin', 'unsafe-url']
    })
  );

  // Sets "Strict-Transport-Security: max-age=31536000"; includeSubDomains; preload.
  app.use(
    helmet.hsts({
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true
    })
  );

  // Sets "Referrer-Policy: strict-origin-when-cross-origin".
  app.use(helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }));

  // The following headers are superseeded by the CSP policy, but still usefull for older browsers.
  // Sets "X-Frame-Options: DENY".
  app.use(helmet.frameguard({ action: 'deny' }));
  // Sets "X-XSS-Protection: 1; mode=block".
  app.use(helmet.xssFilter());
  // Sets "X-Content-Type-Options: nosniff".
  app.use(helmet.noSniff());
};
