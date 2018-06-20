
class NotificationService {

  sendEmail(email, body) {
    return new Promise((resolve, reject) => {
      console.log('Sending Email to ' + email);
      // Connect to device or make 3rd party service call
      resolve({ status: 'ok', message: 'Email sent to ' + email });
    });
  }
  
  sendSms(phoneNumber, text) {
    return new Promise((resolve, reject) => {
      console.log('Sending SMS to ' + phoneNumber);
      // Connect to device or make 3rd party service call
      resolve({ status: 'ok', message: 'Message sent to ' + phoneNumber });
    });
  }
}

export const notificationService = new NotificationService();
