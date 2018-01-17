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
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ = function() {
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
 * @returns {offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ=} obj
 * @returns {offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.getRootAsT_CLIENT_OFFCIAL_SEND_MESSAGE_RQ = function(bb, obj) {
  return (obj || new offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RQ_HEAD=} obj
 * @returns {commonpack.S_RQ_HEAD}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.prototype.sRqHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RQ_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.prototype.messageId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.prototype.offcialId = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {number} index
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.prototype.toUserLst = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint64(this.bb.__vector(this.bb_pos + offset) + index * 8) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.prototype.toUserLstLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint64Array}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.prototype.toUserLstArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? new Uint64Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {commonpack.S_MSG=} obj
 * @returns {commonpack.S_MSG}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.prototype.sMsg = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? (obj || new commonpack.S_MSG).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.prototype.bId = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.prototype.wId = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.prototype.cId = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.startT_CLIENT_OFFCIAL_SEND_MESSAGE_RQ = function(builder) {
  builder.startObject(8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRqHeadOffset
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.addSRqHead = function(builder, sRqHeadOffset) {
  builder.addFieldStruct(0, sRqHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} messageId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.addMessageId = function(builder, messageId) {
  builder.addFieldInt64(1, messageId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} offcialId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.addOffcialId = function(builder, offcialId) {
  builder.addFieldInt64(2, offcialId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} toUserLstOffset
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.addToUserLst = function(builder, toUserLstOffset) {
  builder.addFieldOffset(3, toUserLstOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Long>} data
 * @returns {flatbuffers.Offset}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.createToUserLstVector = function(builder, data) {
  builder.startVector(8, data.length, 8);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.startToUserLstVector = function(builder, numElems) {
  builder.startVector(8, numElems, 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sMsgOffset
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.addSMsg = function(builder, sMsgOffset) {
  builder.addFieldOffset(4, sMsgOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} bId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.addBId = function(builder, bId) {
  builder.addFieldInt64(5, bId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} wId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.addWId = function(builder, wId) {
  builder.addFieldInt64(6, wId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} cId
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.addCId = function(builder, cId) {
  builder.addFieldInt64(7, cId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.endT_CLIENT_OFFCIAL_SEND_MESSAGE_RQ = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
offcialpack.T_CLIENT_OFFCIAL_SEND_MESSAGE_RQ.finishT_CLIENT_OFFCIAL_SEND_MESSAGE_RQBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.offcialpack = offcialpack;