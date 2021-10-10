# next-auth-passwordless

**Using SendGrid**

## Notes from creating this repository

**Started from the next-auth-repository**

**Start dev:**

```
npm run dev
```

## Create a SendGrid API key

https://app.sendgrid.com/

Go to: Email API>Integration Guide, Choose "SMTP Relay" to create API key

**Add environmental variables, add API key as password and the verified email at the From Email to the .env file:**

```
EMAIL_SERVER_HOST=smtp.sendgrid.net
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=apikey
EMAIL_SERVER_PASSWORD=
EMAIL_FROM=
```

**Create a verified email:**

https://app.sendgrid.com/

Go to: Settings>Sender Authentication, to authenticate an email
Add a "Single Sender Verification" email

**Add email provider to [...nextauth] file:**

```
    Providers.Email({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
          }
        },
        from: process.env.EMAIL_FROM
    }),
```

**Should work now**

**Done**

### Settings are from:

**Next.js | Passwordless Sign In with NextAuth.js and SendGrid**

https://www.youtube.com/watch?v=61sMBUOUVww&t=301s

https://gitlab.com/pragmaticreviews/next.js-jobs-app/-/tree/nextauth-passwordless
