class GoogleDriveService {
  constructor() {
    this.clientId = process.env.GOOGLE_CLIENT_ID || '';
    this.redirectUri = process.env.GOOGLE_REDIRECT_URI || '';
  }

  isAuthenticated() {
    return false;
  }

  getAuthUrl() {
    return null;
  }

  async saveFile() {
    throw new Error('Google Drive não configurado neste ambiente.');
  }
}

module.exports = GoogleDriveService;
