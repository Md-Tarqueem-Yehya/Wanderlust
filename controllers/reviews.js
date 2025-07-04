const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
    console.log(req.params.id);
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    // console.log(newReview);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Created!");
    // console.log("new review saved");
    // res.send("new review saved");

    res.redirect(`/listings/${listing._id}`);
};


module.exports.destroyReview = async(req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    // await Listing.findByIdAndUpdate(id, { 
    //     $pull: { reviews: new mongoose.Types.ObjectId(reviewId) }
    // });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    // console.log("Listing ID:", id);
    // console.log("Review ID:", reviewId);
    res.redirect(`/listings/${id}`);
};