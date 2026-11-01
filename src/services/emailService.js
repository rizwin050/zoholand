import site from '../config/site';

const ENDPOINT = 'https://api.web3forms.com/submit';
const { accessKey } = site.web3forms;

/** True when a Web3Forms access key is present in the environment. */
export const isEmailConfigured = Boolean(accessKey);

/**
 * Posts the enquiry to Web3Forms, which emails every field to the address
 * the access key was created with (greenlandparticleboard@gmail.com).
 */
export async function sendEnquiry(values) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New website enquiry from ${values.name.trim()}`,
      from_name: 'Zohaland Website',
      replyto: values.email.trim(), // Reply in Gmail goes straight to the customer
      Name: values.name.trim(),
      Company: values.company.trim() || 'Not provided',
      Email: values.email.trim(),
      Phone: values.phone.trim(),
      Product: values.product || 'Not specified',
      Quantity: values.quantity.trim() || 'Not specified',
      Message: values.message.trim() || 'No additional details',
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Enquiry could not be sent');
  }
}