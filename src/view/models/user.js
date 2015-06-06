'use strict';

var User = function (user) {
  // Accommodate different type of events
  this.type = 'user';

  // Tweet status
  this.id = user.id_str;

  // User info
  this.screenName = user.screen_name;
  this.name = user.name;
  this.icon = user.profile_image_url_https;
  this.profileBackground = user.profile_banner_url;

  this.description = user.description;
  this.url = user.url;

  this.expandedUrl = user.url && user.entities ? user.entities.url.urls[0].expanded_url : null;
  this.location = user.location;
  
  this.followersCount = user.followers_count;
  this.friendsCount = user.friends_count;
  this.listedCount = user.listed_count;
  this.favoritesCount = user.favourites_count;
  this.statusesCount = user.statuses_count;

  this.isProtected = user.protected;
  this.isFollowing = user.following;
};

module.exports = User;