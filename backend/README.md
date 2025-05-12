# ✅ Dice Event Management App – Feature Checklist

## 🧱 Backend (Node.js + Express + MongoDB)

### 🔐 Authentication & Authorization

#### 👤 **User Routes**

* [ ] `POST /signup` – Register a new user
* [ ] `POST /signin` – Authenticate user and issue JWT
* [ ] `GET /events` – Retrieve all available events
* [ ] `POST /events/:id/register` – Register for a specific event
* [ ] `GET /my-events` – View events the user has registered for

#### 🛠 **Admin Routes**

* [ ] `POST /admin/signup` – Register a new admin
* [ ] `POST /admin/signin` – Authenticate admin and issue JWT
* [ ] `POST /admin/events` – Create a new event
* [ ] `PUT /admin/events/:id` – Update event details
* [ ] `DELETE /admin/events/:id` – Delete an event
* [ ] `GET /admin/registrations/:eventId` – View registrations for an event
* [ ] `POST /admin/attendance/:eventId` – Mark attendance for an event
* [ ] `GET /admin/blacklist` – View blacklisted users

---

## 🗃️ Database Schemas (Mongoose)

* [ ] **User Schema:**
  `name`, `email`, `password`, `registeredEvents`, `missedEvents`, `isBlacklisted`

* [ ] **Admin Schema:**
  `name`, `email`, `password`

* [ ] **Event Schema:**
  `title`, `description`, `date`, `location`, `capacity`, `registrations`, `attendees`

* [ ] **Attendance Schema:**
  `eventId`, `userId`, `status` (e.g., `'present'`, `'absent'`)

---

## 🔄 Additional Backend Features

### ❌ Blacklist Logic

* [ ] Automatically blacklist users who miss more than 2 events they registered for

### 📤 Google Sheets Integration

* [ ] Use Google Sheets API to export registration and attendance data for each event

### ✉️ Email Notifications

* [ ] Send confirmation emails upon registration
* [ ] Send reminders before the event
* [ ] Notify users upon blacklisting

