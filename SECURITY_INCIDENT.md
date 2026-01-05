# 🚨 SECURITY INCIDENT: Exposed SMTP Credentials

## What Happened
Your SMTP credentials (email and password) were accidentally committed to the GitHub repository in the `env.example` file.

## Immediate Actions Required

### 1. **URGENT: Change Your Gmail App Password NOW**
Your current Gmail App Password (`aqylqmpzxazrgfow`) is publicly visible on GitHub and must be revoked immediately.

**Steps to revoke and create a new password:**
1. Go to https://myaccount.google.com/apppasswords
2. Find and **delete** the app password that was exposed
3. Create a **new** app password for your VPN website
4. Update your local `.env.local` file with the new password

### 2. **Update Local Environment File**
After creating a new app password, update your `.env.local` file:
```env
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=robinjkuipers@gmail.com
MAIL_PASSWORD=your-new-app-password-here
MAIL_FROM=robinjkuipers@gmail.com
MAIL_TO=info@kuiperslibertas.com
```

### 3. **Clean Git History (Optional but Recommended)**
The old credentials are still in your Git history. To completely remove them:

**Option A: Force push with cleaned history (DESTRUCTIVE)**
```bash
# Create a backup first
git branch backup-before-cleanup

# Remove the file from history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch env.example" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (this rewrites history)
git push origin --force --all
```

**Option B: Start fresh (if no one else is using the repo)**
1. Delete the repository on GitHub
2. Create a new repository with the same name
3. Push the cleaned code

### 4. **What We've Done**
- ✅ Removed real credentials from `env.example`
- ✅ Replaced with placeholder values
- ⏳ Ready to commit and push the fix

## Prevention for Future
- ✅ `.env.local` is already in `.gitignore` (won't be committed)
- ✅ `env.example` should only contain placeholder values
- ✅ Never commit actual credentials to version control

## Next Steps
1. **Immediately revoke the exposed app password**
2. **Create a new app password**
3. **Update your local `.env.local` file**
4. We'll commit and push the cleaned `env.example` file
