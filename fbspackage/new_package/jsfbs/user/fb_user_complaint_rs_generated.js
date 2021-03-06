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
var userpack = userpack || {};

/**
 * @constructor
 */
userpack.T_USER_COMPLAINT_RS = function() {
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
 * @returns {userpack.T_USER_COMPLAINT_RS}
 */
userpack.T_USER_COMPLAINT_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {userpack.T_USER_COMPLAINT_RS=} obj
 * @returns {userpack.T_USER_COMPLAINT_RS}
 */
userpack.T_USER_COMPLAINT_RS.getRootAsT_USER_COMPLAINT_RS = function(bb, obj) {
  return (obj || new userpack.T_USER_COMPLAINT_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
userpack.T_USER_COMPLAINT_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
userpack.T_USER_COMPLAINT_RS.prototype.userId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
userpack.T_USER_COMPLAINT_RS.prototype.type = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_USER_COMPLAINT_RS.prototype.reason = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
userpack.T_USER_COMPLAINT_RS.startT_USER_COMPLAINT_RS = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
userpack.T_USER_COMPLAINT_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} userId
 */
userpack.T_USER_COMPLAINT_RS.addUserId = function(builder, userId) {
  builder.addFieldInt64(1, userId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
userpack.T_USER_COMPLAINT_RS.addType = function(builder, type) {
  builder.addFieldInt8(2, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} reasonOffset
 */
userpack.T_USER_COMPLAINT_RS.addReason = function(builder, reasonOffset) {
  builder.addFieldOffset(3, reasonOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
userpack.T_USER_COMPLAINT_RS.endT_USER_COMPLAINT_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
userpack.T_USER_COMPLAINT_RS.finishT_USER_COMPLAINT_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.userpack = userpack;
