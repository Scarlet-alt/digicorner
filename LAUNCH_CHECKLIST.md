# DigiCorner Launch Checklist

## 1. Intro Video Check
- [ ] `/?intro=1` shows the intro
- [ ] Enter DigiCorner works
- [ ] Skip intro works

## 2. Homepage Check
- [ ] Hero image is visible
- [ ] Carousels animate correctly
- [ ] No network dots or fake dashboards
- [ ] No horizontal overflow

## 3. Mobile Check
- [ ] Manually test 375px width
- [ ] Nav/menu works
- [ ] Carousel cards are usable
- [ ] CTA buttons work

## 4. Booking
- [ ] Replace placeholder Calendly link with real booking link
- [ ] Verify `/book` opens the scheduler in a new tab

## 5. Payment
- [ ] If `/payment` exists, replace any placeholder payment link with a real Stripe/PayPal link
- [ ] Do not use fake card forms

## 6. Contact
- [ ] Verify the final email address
- [ ] Verify the location wording

## 7. SEO
- [ ] Title is `DigiCorner — Digital Intelligence Agency`
- [ ] Meta description is present and correct
- [ ] Social preview image is set

## 8. Assets
- [ ] Remove unused old videos/images
- [ ] Keep the final intro video
- [ ] Keep the hero image
- [ ] Keep favicon/logo

## 9. Build
- [ ] Run `npm run build`

## 10. Deployment
- [ ] Deploy the Vite static build
- [ ] Test the live URL
- [ ] Refresh all routes and confirm they work