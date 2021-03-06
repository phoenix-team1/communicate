// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var commonpack = commonpack || {};

/**
 * @const
 * @namespace
 */
var friendpack = friendpack || {};

/**
 * @constructor
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {friendpack.T_CLINET_FRIEND_BLACKLIST_RS}
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {friendpack.T_CLINET_FRIEND_BLACKLIST_RS=} obj
 * @returns {friendpack.T_CLINET_FRIEND_BLACKLIST_RS}
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.getRootAsT_CLINET_FRIEND_BLACKLIST_RS = function(bb, obj) {
  return (obj || new friendpack.T_CLINET_FRIEND_BLACKLIST_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.prototype.peerUserId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.prototype.type = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns {flatbuffers.Long}
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.prototype.token = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.startT_CLINET_FRIEND_BLACKLIST_RS = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} peerUserId
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.addPeerUserId = function(builder, peerUserId) {
  builder.addFieldInt64(1, peerUserId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.addType = function(builder, type) {
  builder.addFieldInt32(2, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} token
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.addToken = function(builder, token) {
  builder.addFieldInt64(3, token, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.endT_CLINET_FRIEND_BLACKLIST_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
friendpack.T_CLINET_FRIEND_BLACKLIST_RS.finishT_CLINET_FRIEND_BLACKLIST_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.friendpack = friendpack;
