if (!req.body.new) {
    // Return early if no new password is provided
    return res.status(400).send('New password is requied');
}