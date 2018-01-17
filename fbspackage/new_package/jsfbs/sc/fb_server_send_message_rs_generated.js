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
var scpack = scpack || {};

/**
 * @constructor
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS = function() {
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
 * @returns {scpack.T_CHAT_SERVER_SEND_MESSAGE_RS}
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {scpack.T_CHAT_SERVER_SEND_MESSAGE_RS=} obj
 * @returns {scpack.T_CHAT_SERVER_SEND_MESSAGE_RS}
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.getRootAsT_CHAT_SERVER_SEND_MESSAGE_RS = function(bb, obj) {
  return (obj || new scpack.T_CHAT_SERVER_SEND_MESSAGE_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.prototype.opUserId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.prototype.messageId = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {commonpack.S_MSG=} obj
 * @returns {commonpack.S_MSG}
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.prototype.sMsg = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? (obj || new commonpack.S_MSG).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.prototype.bId = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.prototype.wId = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.prototype.cId = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.startT_CHAT_SERVER_SEND_MESSAGE_RS = function(builder) {
  builder.startObject(7);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} opUserId
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.addOpUserId = function(builder, opUserId) {
  builder.addFieldInt64(1, opUserId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} messageId
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.addMessageId = function(builder, messageId) {
  builder.addFieldInt64(2, messageId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sMsgOffset
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.addSMsg = function(builder, sMsgOffset) {
  builder.addFieldOffset(3, sMsgOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} bId
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.addBId = function(builder, bId) {
  builder.addFieldInt64(4, bId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} wId
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.addWId = function(builder, wId) {
  builder.addFieldInt64(5, wId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} cId
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.addCId = function(builder, cId) {
  builder.addFieldInt64(6, cId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.endT_CHAT_SERVER_SEND_MESSAGE_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
scpack.T_CHAT_SERVER_SEND_MESSAGE_RS.finishT_CHAT_SERVER_SEND_MESSAGE_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.scpack = scpack;
