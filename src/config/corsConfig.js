const allowedOrigin = [
  'http://localhost:8080',
  'http://localhost:5173',
  'http://127.0.0.1',
  'http://127.0.0.1:8080',
];

export const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
