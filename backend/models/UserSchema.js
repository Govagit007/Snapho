const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  fullName: String,
  profilePhoto: String,
  shortBio: { type: String, required: true },
  longBio: String,
  tags: [{ type: String, unique: true, required: true }],
  badges: [{ type: String, unique: true, required: true }],
  layout: {
    layoutType: String,
    layoutId: Number,
  },
  colors: {
    bg: String,
    card: String,
    layout: String,
    text: String,
    cardText: String,
    layoutText: String,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = UserSchema;
