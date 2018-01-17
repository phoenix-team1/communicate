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
var offcialpack = offcialpack || {};

/**
 * @constructor
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS = function() {
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
 * @returns {offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS=} obj
 * @returns {offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.getRootAsT_CLIENT_OFFCIAL_SEND_ONE_MSG_RS = function(bb, obj) {
  return (obj || new offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.prototype.messageId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.prototype.offcialId = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.prototype.fansId = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {commonpack.S_MSG=} obj
 * @returns {commonpack.S_MSG}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.prototype.sMsg = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? (obj || new commonpack.S_MSG).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.prototype.bId = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.prototype.wId = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.prototype.cId = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.startT_CLIENT_OFFCIAL_SEND_ONE_MSG_RS = function(builder) {
  builder.startObject(8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} messageId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.addMessageId = function(builder, messageId) {
  builder.addFieldInt64(1, messageId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} offcialId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.addOffcialId = function(builder, offcialId) {
  builder.addFieldInt64(2, offcialId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} fansId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.addFansId = function(builder, fansId) {
  builder.addFieldInt64(3, fansId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sMsgOffset
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.addSMsg = function(builder, sMsgOffset) {
  builder.addFieldOffset(4, sMsgOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} bId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.addBId = function(builder, bId) {
  builder.addFieldInt64(5, bId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} wId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.addWId = function(builder, wId) {
  builder.addFieldInt64(6, wId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} cId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.addCId = function(builder, cId) {
  builder.addFieldInt64(7, cId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.endT_CLIENT_OFFCIAL_SEND_ONE_MSG_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_ONE_MSG_RS.finishT_CLIENT_OFFCIAL_SEND_ONE_MSG_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.offcialpack = offcialpack;