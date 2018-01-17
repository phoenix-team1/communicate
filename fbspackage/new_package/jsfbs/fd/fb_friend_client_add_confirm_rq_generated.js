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
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ = function() {
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
 * @returns {friendpack.T_FRIEND_CLIENT_CONFIRM_RQ}
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {friendpack.T_FRIEND_CLIENT_CONFIRM_RQ=} obj
 * @returns {friendpack.T_FRIEND_CLIENT_CONFIRM_RQ}
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.getRootAsT_FRIEND_CLIENT_CONFIRM_RQ = function(bb, obj) {
  return (obj || new friendpack.T_FRIEND_CLIENT_CONFIRM_RQ).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RQ_HEAD=} obj
 * @returns {commonpack.S_RQ_HEAD}
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.prototype.sRqHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RQ_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.prototype.ownNickname = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.prototype.peerUserId = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.prototype.sourceType = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.prototype.peerRemark = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.prototype.token = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.prototype.result = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.startT_FRIEND_CLIENT_CONFIRM_RQ = function(builder) {
  builder.startObject(7);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRqHeadOffset
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.addSRqHead = function(builder, sRqHeadOffset) {
  builder.addFieldStruct(0, sRqHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} ownNicknameOffset
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.addOwnNickname = function(builder, ownNicknameOffset) {
  builder.addFieldOffset(1, ownNicknameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} peerUserId
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.addPeerUserId = function(builder, peerUserId) {
  builder.addFieldInt64(2, peerUserId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} sourceType
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.addSourceType = function(builder, sourceType) {
  builder.addFieldInt8(3, sourceType, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} peerRemarkOffset
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.addPeerRemark = function(builder, peerRemarkOffset) {
  builder.addFieldOffset(4, peerRemarkOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} token
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.addToken = function(builder, token) {
  builder.addFieldInt64(5, token, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} result
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.addResult = function(builder, result) {
  builder.addFieldInt32(6, result, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.endT_FRIEND_CLIENT_CONFIRM_RQ = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
friendpack.T_FRIEND_CLIENT_CONFIRM_RQ.finishT_FRIEND_CLIENT_CONFIRM_RQBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.friendpack = friendpack;
